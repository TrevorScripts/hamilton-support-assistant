# Hamilton Motor Company AI Support Assistant

A production AI-powered support tool built with the Claude API (Anthropic) 
to assist Hamilton Motor Company's technical support team during live 
customer calls.

## What It Does

The assistant has two core functions:

### 1. Call Intake
Guides the support agent through structured vehicle intake — Year, Make, 
Model, and Trim — then identifies the correct CarPlay or Android Auto 
upgrade kit for that vehicle. Surfaces compatibility considerations and 
flags potential fitment issues in real time while the agent is on the phone.

### 2. Help Center Article Search
Surfaces relevant support articles, troubleshooting guides, and product 
manuals from Hamilton Motor Company's Help Center based on the customer's 
issue. Reduces time spent searching across multiple systems during a 
live call.

## How It Works

- Built as a single-file HTML application powered by the Anthropic Claude API
- Uses Claude's web search capability to surface live Help Center content
- Structured system prompts guide the model to follow support workflows 
  and maintain a consistent intake flow
- Designed for speed — agents get context-aware responses without 
  leaving the interface

## Tech Stack

- HTML / CSS / JavaScript (single-file, no build step required)
- Anthropic Claude API (claude-sonnet)
- Web search tool integration for live Help Center retrieval
- Deployed via Netlify

## How to Use

1. Open the app in a browser - https://hamilton-app.netlify.app/
2. Enter your Anthropic API key when prompted (stored in memory only)
3. Select either **Call Intake** or **Help Center** mode
4. Type the customer's vehicle information or issue description
5. The assistant returns structured guidance and relevant resources

## Purpose

Built for onboarding at Hamilton Motor Company to reduce average 
handle time and give support agents a faster, more consistent way to 
match customers to the right product. Demonstrates practical LLM 
deployment in a customer-facing support context.

## Author

Trevor | AI Enablement & Technical Support  
[LinkedIn](https://linkedin.com/in/trevorstone9007)
