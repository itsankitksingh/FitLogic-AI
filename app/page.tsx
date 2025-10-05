"use client"
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import ReactMarkdown from "react-markdown"
import { PromptSuggestionRow } from "./components/PromptSuggestionRow"
import { LoadingBubble } from "./components/LoadingBubble"
import { Bubble } from "./components/Bubble"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handlePromptClick = (prompt: string) => sendMessage(prompt)

  const sendMessage = async (text: string) => {
    const userMessage: Message = { id: crypto.randomUUID(), role: "user", content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })
      const reply = await res.text()
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      console.error("Error:", err)
    } finally {
      setIsLoading(false)
      setInput("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage(input)
  }

  const noMessages = messages.length === 0

  return (
    <main className="fitness-app">
      <div className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <Image src="/assets/fitlogic-logo.png" width={150} height={150} alt="FitLogic Logo" className="hero-logo" />
          <h1>FitLogic AI</h1>
          <p>Your AI-powered personal trainer. Transform your fitness journey today.</p>
        </div>
      </div>

      <section className={`chat-section ${noMessages ? "empty" : ""}`}>
        {noMessages ? (
          <>
            <p className="starter-text">🏋️ Let's crush your fitness goals together! 🏋️</p>
            <PromptSuggestionRow onPromptClick={handlePromptClick} />
          </>
        ) : (
          <>
            {messages.map((m) => (
              <Bubble key={m.id} message={m}>
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </Bubble>
            ))}
            {isLoading && <LoadingBubble />}
            <div ref={messagesEndRef} />
          </>
        )}
      </section>

      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask FitLogic for a workout, meal plan, or fitness tips..."
        />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </main>
  )
}

export default Home
