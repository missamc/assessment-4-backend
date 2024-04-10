
const inspos = ['meditate', 'exercise', 'affirmations', 'VB']




module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "A friend asks only for your time not your money.", "A hunch is creativity trying to tell you something.", "A new outlook brightens your image and brings new friends.", "A small donation is call for. It’s the right thing to do.", "A smile is your personal welcome mat.", "All the effort you are making will ultimately pay off."];


        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];

        res.status(200).send(randomFortune);
    },

    getInspo: (req, res) => {
        res.status(200).send(inspos)
    },

    addInspo: (req, res) => {
        inspos.push(+req.body)

        res.status(200).send(inspos)
    }

    // getParamsSubmit: (req, res) => {


    //     res.status(200).send()
    // }

}