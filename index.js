
// write a function that creates rock, paper, scissors game

// require prompt
const {Octokit} = require('@octokit/rest')
const prompt = require('prompt-sync')();
function rockPaperScissors(){
    var player1 = prompt("Player 1, please choose rock, paper, or scissors\n");
    // make player 2 be a computer
    var player2 = Math.random();
    if (player2 < 0.34) {
        player2 = "rock";
    } else if (player2 <= 0.67) {
        player2 = "paper";
    } else {
        player2 = "scissors";
    }
    if (player1 === player2){
        console.log("It's a tie!");
    } else if (player1 === "rock" && player2 === "scissors"){
        console.log("Player 1 wins!");
    } else if (player1 === "rock" && player2 === "paper"){
        console.log("Player 2 wins!");
    } else if (player1 === "paper" && player2 === "rock"){
        console.log("Player 1 wins!");
    } else if (player1 === "paper" && player2 === "scissors"){
        console.log("Player 2 wins!");
    } else if (player1 === "scissors" && player2 === "paper"){
        console.log("Player 1 wins!");
    } else if (player1 === "scissors" && player2 === "rock"){
        console.log("Player 2 wins!");
    } else {
        console.log("Something went wrong");
    }
}

// rockPaperScissors();

// octokit create GitHub pages static site
async function postToGitHubPages(){

// enable a pages site
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });
    try{
        const result = await octokit.request('POST /repos/:owner/:repo/pages', {
            owner: 'blackgirlbytes',
            repo: 'test-repo-github-page',
            source: {
                branch: 'main',
                path: '/'
            }
        });
        console.log(result);
    } catch(err) {
        console.log(err)
    } 
}


// postToGitHubPages();

// post to

// write function to validate phone number with regex
function validatePhoneNumber(){
    var phoneNumber = prompt("Please enter your phone number\n");
    var phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneNumberRegex.test(phoneNumber)){
        console.log("Valid phone number");
    } else {
        console.log("Invalid phone number");
    }
}


// write a binary search algorithm
const binarySearch = (arr, target) => {
    let left=0;
    let right=arr.length-1;
    let middle=Math.floor((left+right)/2);
    while(arr[middle]!==target && left<=right){
        if(target<arr[middle]){
            right=middle-1;
        } else {
            left=middle+1;
        }
        middle=Math.floor((left+right)/2);
    }
}
