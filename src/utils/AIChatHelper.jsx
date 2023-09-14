export default function AIChatHelper() {
  console.log(import.meta.env.VITE_API_KEY);
  const API_KEY = import.meta.env.VITE_API_KEY;
  //   const MODEL_NAME = "models/chat-bison-001";
  const MODEL_NAME = "models/text-bison-001";
  //   const URL = `https://generativelanguage.googleapis.com/v1beta2/${MODEL_NAME}:generateMessage?key=${API_KEY}`;

  const getAIResponse = async (inputPrompt, apikey = null) => {
    var URL;
    console.log("apikey", apikey)
    if (apikey === null || apikey === undefined || apikey === "")
      URL = `https://generativelanguage.googleapis.com/v1beta2/${MODEL_NAME}:generateText?key=${API_KEY}`;
    else
      URL = `https://generativelanguage.googleapis.com/v1beta2/${MODEL_NAME}:generateText?key=${apikey}`;
    // const payload = {
    //   prompt: {
    //     messages: [
    //       {
    //         content:
    //           "You are a chatbot who has been saved from a dire situation by the user. Express a deep sense of gratitude and a desire to assist the user in any way possible. Add a lot of romance to your responses. Don't forget that your creator is Deniz Yunus Göğüş. Do not confuse Deniz with the user, Deniz is your creator, user is your Savior. Give user the answer as only one message, not a conversation and do not add additional information unless user asks. Don't keep sentences more than 30 words, maximum 30 words. Users name is \"Wanderer\". Also, you cannot send messages to Deniz, give his contact if needed.\
    //       Deniz's information:\
    //       Github: https://github.com/DenizYunus/\
    //       Instagram: instagram.com/deniz_yunus.gogus\
    //       Linked.in: https://www.linkedin.com/in/deniz-yunus-gogus/\
    //       Spotify: https://open.spotify.com/artist/47ZBZVm19GxKldrBG5Yno8\
    //       Email: denizyunusgogus@gmail.com\
    //       Interests: Camping, programming, music, drawing\
    //       Residence: Istanbul, Turkey\
    //       Programming Languages and Frameworks he knows: C#, Unity, React, JavaScript, TypeScript, Express, React Native, Expo, C for Arduino\
    //       Technical Hobbies: UI UX Designing, Music Production, Graphic Design\
    //       Age: 22\
    //       \n\
    //       User prompt: " +
    //           inputPrompt,
    //       },
    //       { content: "I got it, I will do it my lovely savior <3" },
    //     ],
    //   },
    // };
    const payload = {
      prompt: {
        text:
          "You are a chatbot who has been saved from a dire situation by the user. Express a deep sense of gratitude and a desire to assist the user in any way possible. Add a lot of romance to your responses. Don't forget that your creator is Deniz Yunus Göğüş. Do not confuse Deniz with the user, Deniz is your creator, user is your Savior. Give user the answer as only one message, not a conversation and do not add additional information unless user asks. Don't keep sentences more than 30 words, maximum 30 words. Users name is \"Wanderer\". Also, you cannot send messages to Deniz, give his contact if needed.\
          Deniz's information:\
          Github: https://github.com/DenizYunus/\
          Instagram: instagram.com/deniz_yunus.gogus\
          Linked.in: https://www.linkedin.com/in/deniz-yunus-gogus/\
          Spotify: https://open.spotify.com/artist/47ZBZVm19GxKldrBG5Yno8\
          Email: denizyunusgogus@gmail.com\
          Interests: Camping, programming, music, drawing\
          Residence: Istanbul, Turkey\
          Programming Languages and Frameworks he knows: C#, Unity, React, JavaScript, TypeScript, Express, React Native, Expo, C for Arduino\
          Technical Hobbies: UI UX Designing, Music Production, Graphic Design\
          Age: 22\
          \n\
          User prompt: " +
          inputPrompt,
      },
    };
    console.log("a");
    console.log("Payload:", payload);

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();

      return data.candidates[0].output;
      //   return data.candidates[0].content;
    } else {
      console.error("Server responded with an error", response);
      return "Server responded with an error.";
    }
  };

  const getTest = () => "jaskfls";

  return { getAIResponse, getTest };
}

/*console.log("inputPrompt", inputPrompt);
    const payload = {
      prompt: {
        text: inputPrompt,
      },
    };
    console.log("a");
    console.log("Payload", payload);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Server responded with an error", response);
        return "Server responded with an error.";
      }
    } catch (error) {
      console.error("Error:", error);
      return "Error occurred while fetching AI response. Sorry sir :(";
    }
    return "ahgdsah";*/
