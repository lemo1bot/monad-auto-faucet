const readline = require("readline");

const axios = require("axios");



// Display the creator's name and Twitter link in big, bold letters

console.log("\n=========================================");

console.log("🚀🚀🚀   CREATED BY LEMON   🚀🚀🚀");

console.log("=========================================");

console.log("📢 Follow me on Twitter: https://twitter.com/Rosla_Ahemed");

console.log("=========================================\n");



// List of available Monad faucet protocols

const faucets = [

  { name: "Monad Official Faucet", url: "https://faucet.testnet.monad.io", description: "Official testnet faucet" },

  { name: "Community Faucet 1", url: "https://faucet.community1.com", description: "Community-provided faucet #1" },

  { name: "Community Faucet 2", url: "https://faucet.community2.com", description: "Community-provided faucet #2" },

];



// Create an interface for user input

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout,

});



console.log("\n🌐 Available Monad Faucet Protocols:");



// Display faucet options

faucets.forEach((faucet, index) => {

  console.log(`${index + 1}. ${faucet.name} - ${faucet.description}`);

});



// Prompt user to select a faucet

rl.question("\n🔹 Select a faucet by entering the corresponding number: ", (choice) => {

  const index = parseInt(choice) - 1;



  if (isNaN(index) || index < 0 || index >= faucets.length) {

    console.log("❌ Invalid selection. Please enter a valid number.");

    rl.close();

    return;

  }



  const selectedFaucet = faucets[index];

  console.log(`✅ You selected: ${selectedFaucet.name}`);



  // Prompt for Monad wallet address

  rl.question("\n🔹 Enter your Monad wallet address: ", (address) => {

    if (!address || address.length < 20) {

      console.log("❌ Invalid address! Please enter a valid Monad wallet address.");

      rl.close();

      return;

    }



    console.log(`✅ Address received: ${address}`);

    console.log("⏳ Sending claim request...");



    // Send request to the selected faucet

    axios.post(selectedFaucet.url, { address })

      .then((response) => {

        console.log("🎉 Success! Faucet response:", response.data);

      })

      .catch((error) => {

        console.error("❌ Error claiming faucet:", error.message);

      })

      .finally(() => {

        rl.close();

      });

  });

});
