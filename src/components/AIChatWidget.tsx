import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, Bot, User, Loader2, FileText, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  requirements: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-customer-service`;

export const AIChatWidget = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    requirements: "",
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "嗨，您好！我是小星，企数星图的客户顾问～😊 请问有什么可以帮您的吗？",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "请填写必填信息",
        description: "姓名和手机号是必填项哦～",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("customer_inquiries").insert({
        name: formData.name,
        company: formData.company || null,
        phone: formData.phone,
        email: formData.email || null,
        industry: formData.industry || null,
        requirements: formData.requirements || null,
        source: "ai_chat",
      });

      if (error) throw error;

      toast({
        title: "提交成功！🎉",
        description: "我们的顾问会尽快联系您～",
      });

      setShowForm(false);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        industry: "",
        requirements: "",
      });

      // Add confirmation message
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "太好了，信息已经收到啦！我们的专业顾问会在1个工作日内联系您，请保持电话畅通哦～有其他问题随时问我😊",
        },
      ]);
    } catch (error) {
      console.error("Submit error:", error);
      toast({
        title: "提交失败",
        description: "请稍后重试或直接拨打 400-888-8888",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";

    try {
      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to get response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const newMessages = [...prev];
                const lastMessage = newMessages[newMessages.length - 1];
                if (lastMessage?.role === "assistant") {
                  lastMessage.content = assistantContent;
                }
                return newMessages;
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "哎呀，网络好像有点问题～您可以直接拨打 400-888-8888 联系我们哦！",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-pulse">
              1
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[550px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                {showForm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowForm(false)}
                    className="w-8 h-8 text-primary-foreground hover:bg-primary-foreground/20 mr-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-sm">小星 · 客户顾问</span>
                  <span className="block text-xs opacity-80">在线</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!showForm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowForm(true)}
                    className="w-8 h-8 text-primary-foreground hover:bg-primary-foreground/20"
                    title="填写留资表单"
                  >
                    <FileText className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {showForm ? (
              /* Lead Form */
              <div className="flex-1 overflow-y-auto p-4">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-1">预约专属顾问</h3>
                  <p className="text-sm text-muted-foreground">填写信息后，我们会在1个工作日内联系您</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleFormChange("name", e.target.value)}
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      手机号 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleFormChange("phone", e.target.value)}
                      placeholder="请输入手机号"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">公司名称</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleFormChange("company", e.target.value)}
                      placeholder="请输入公司名称（选填）"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">邮箱</label>
                    <Input
                      value={formData.email}
                      onChange={(e) => handleFormChange("email", e.target.value)}
                      placeholder="请输入邮箱（选填）"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">所属行业</label>
                    <Input
                      value={formData.industry}
                      onChange={(e) => handleFormChange("industry", e.target.value)}
                      placeholder="如：制造业、金融、医疗等"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">需求描述</label>
                    <Textarea
                      value={formData.requirements}
                      onChange={(e) => handleFormChange("requirements", e.target.value)}
                      placeholder="简单描述您的需求，方便顾问提前准备"
                      rows={3}
                    />
                  </div>
                  <Button
                    onClick={handleFormSubmit}
                    disabled={isSubmitting}
                    className="w-full"
                    variant="hero"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        提交中...
                      </>
                    ) : (
                      "提交预约"
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-secondary text-secondary-foreground rounded-bl-sm"
                        }`}
                      >
                        {message.content || (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        )}
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <User className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="px-4 py-2 border-t border-border/50 flex gap-2 overflow-x-auto">
                  <button
                    onClick={() => setShowForm(true)}
                    className="shrink-0 px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    📝 预约演示
                  </button>
                  <button
                    onClick={() => {
                      setInput("想了解你们的产品");
                      setTimeout(sendMessage, 100);
                    }}
                    className="shrink-0 px-3 py-1.5 text-xs bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    了解产品
                  </button>
                  <button
                    onClick={() => {
                      setInput("你们跟其他AI公司有什么不同");
                      setTimeout(sendMessage, 100);
                    }}
                    className="shrink-0 px-3 py-1.5 text-xs bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    核心优势
                  </button>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="请输入您的问题..."
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!input.trim() || isLoading}
                      size="icon"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
