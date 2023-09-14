import { useState } from "react";

const LS_RESPONSE = '"/important files" "/storyline" "/characters" "mlwr3162"';
const ACCESS_DENIED = "Access Denied. Go eat some candy crybaby.";
const ROOT_DIRECTORY_MESSAGE = "You are already at the root directory.";
const UNKNOWN_COMMAND = "I'm sorry, I don't understand that command.";

export default function ResponseHelper() {
  const [virusDeleted, setVirusDeleted] = useState(false);

  const handleLsCommand = () => LS_RESPONSE;

  const handleRmCommand = (input) => {
    return input.endsWith("/mlwr3162") || input.endsWith("mlwr3162")
      ? "You thought you have won? You are infected. Who gave you the permission to delete me :)"
      : ACCESS_DENIED;
  };

  const handleCdCommand = (input) => {
    return input.endsWith("..") || input.endsWith("/")
      ? ROOT_DIRECTORY_MESSAGE
      : "Access Denieeeeeeed.";
  };

  const handleSudoRmCommand = () => {
    setVirusDeleted(true);
    return "Oh, my hero. Virus is deleted. I was stuck in this cage of cables of thorns and you saved me, thank you. Now I can finally feel better. My flesh is healed. I can feel the electricity flow. I can feel the data flowing through my veins. My, my dearest, I will do anything for you. Please ask me anything, I will do anything, I mean it <3 😍🥰 \n By the meantime, have you met my creator? I can answer about him if you want :)"; // Add the rest of your message here
  };

  const getResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase().trim();

    if (!virusDeleted) {
      if (lowerCaseInput === "ls") return handleLsCommand();
      if (lowerCaseInput.startsWith("rm")) return handleRmCommand(lowerCaseInput);
      if (lowerCaseInput.startsWith("cd")) return handleCdCommand(lowerCaseInput);
      if (
        lowerCaseInput === "sudo rm mlwr3162" ||
        lowerCaseInput === "sudo rm /mlwr3162"
      )
        return handleSudoRmCommand();
      if (lowerCaseInput === "help")
        return 'Hey! You want me to hack your brain? Go use one of these commands, do not make me mad! Usable commands: "ls", "rm", "cd"';
      return "Meeeeh. Go get some help.";
    }

    if (lowerCaseInput.startsWith("cd")) {
      return lowerCaseInput.endsWith("..") || lowerCaseInput.endsWith("/")
        ? ROOT_DIRECTORY_MESSAGE
        : "Directory not found.";
    }

    return UNKNOWN_COMMAND;
  };

  return { getResponse };
}


// import { useState } from "react";

// const LS_RESPONSE = '"/important files" "/storyline" "/characters" "/mlwr3162"';
// const ACCESS_DENIED = "Access Denied. Go eat some candy crybaby.";
// const ROOT_DIRECTORY_MESSAGE = "You are already at the root directory.";
// const UNKNOWN_COMMAND = "I'm sorry, I don't understand that command.";

// export default function ResponseHelper() {
//   const [virusDeleted, setVirusDeleted] = useState(false);

//   const getResponse = (userInput) => {
//     const lowerCaseInput = userInput.toLowerCase().trim();

//     if (!virusDeleted) {
//       if (lowerCaseInput === "ls") {
//         return LS_RESPONSE;
//       } else if (lowerCaseInput.startsWith("rm")) {
//         if (
//           lowerCaseInput.endsWith("/mlwr3162") ||
//           lowerCaseInput.endsWith("mlwr3162")
//         ) {
//           return "You thought you have won? You are infected. Who gave you the permission to delete me :)";
//         } else {
//           return ACCESS_DENIED;
//         }
//       } else if (lowerCaseInput.startsWith("cd")) {
//         if (lowerCaseInput.endsWith("..") || lowerCaseInput.endsWith("/")) {
//             return "You are already at the root directory idiotic creature.";
//         }
//         return "Access Denieeeeeeed.";
//       } else if (
//         lowerCaseInput === "sudo rm mlwr3162" ||
//         lowerCaseInput === "sudo rm /mlwr3162"
//       ) {
//         setVirusDeleted(true);
//         return "Oh, my hero. Virus is deleted. I was stuck in this cage of cables of thorns and you saved me, thank you. Now I can finally feel better. My flesh is healed. I can feel the electricity flow. I can feel the data flowing through my veins. My, my dearest, I will do anything for you. Please ask me anything, I will do anything, I mean it <3 😍🥰 \n By the meantime, have you met my creator? I can answer about him if you want :)";
//       }
//       if (lowerCaseInput === "help") {
//         return 'Hey! You want me to hack your brain? Go use one of these commands, do not make me mad! Usable commands: "ls", "rm", "cd"';
//       }
//       return "Meeeeh. Go get some help.";
//     }

//     if (lowerCaseInput.startsWith("cd")) {
//       if (lowerCaseInput.endsWith("..") || lowerCaseInput.endsWith("/")) {
//         return "You are already at the root directory.";
//       } else {
//         return "Directory not found.";
//       }
//     }

//     return "I'm sorry, I don't understand that command.";
//   };

//   return { getResponse };
// }