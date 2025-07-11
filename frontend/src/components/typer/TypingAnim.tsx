import { TypeAnimation } from "react-type-animation";

// Typing animation component with multiple text sequences
const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        'Chat With Your OWN AI',
        1000,
        'Powered by Llama 3 via Groq 🤖',
        2000,
        'Your Own Customized ChatGPT 💻',
        1500,

      ]}
      speed={50}
      style={{ fontSize: 'clamp(30px, 5vw, 60px)', color: "white", display: "inline-block", textShadow: "1px 1px 20px #000", margin: "auto", textAlign: "center" }}
      repeat={Infinity}
    />
  )
}

export default TypingAnim
