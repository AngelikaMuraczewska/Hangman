import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "ą",
    "b",
    "c",
    "ć",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "ł",
    "m",
    "n",
    "ń",
    "o",
    "ó",
    "p",
    "r",
    "s",
    "ś",
    "t",
    "u",
    "w",
    "x",
    "y",
    "z",
  ]

  type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
  }

export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled = false,}:KeyboardProps){
    return (
        <div 
        style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", 
            gap: ".5rem",
         }}>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
             <button 
             onClick={() => addGuessedLetter(key)}
             className={`${styles.btn} ${isActive ? styles.active : ""}
                ${
                    isInactive ? styles.inactive : ""}
             `}
             disabled={isActive || isInactive || disabled}
             key={key}
             >
                {key}
            </button>
            ) 
        })}

    </div>
    )
}