const { Client, Interaction } = require("discord.js");

module.exports = {
  name: "say",
  description: "Says What Said To say",
  type: "CHAT_INPUT",
  options: [
    {
      name: "text",
      description: "What To Say",
      type: 3,
      required: true,
    },
  ],
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  execute: async (client, interaction) => {
    try {
      await interaction.deferReply().catch((err) => {});

      const whatToSay = interaction.options._hoistedOptions.find((f) => f.name === "text").value;

      await interaction.editReply({ content: "Sending..." });
      await interaction.deleteReply();

      await interaction.channel.send({ content: whatToSay });
    } catch (err) {
      console.log("Something Went Wrong => ", err);
    }
  },
};
