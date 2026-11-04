# Verifiable raffle with Google Apps Script

🇧🇷 [Português](README.md)

> Portfolio project. Code adapted from a real automation in production; **all data, names, IDs and amounts are fictitious**.

## Problem
An event needed to draw prizes among form registrants transparently: anyone should be able to check the result wasn't manipulated, without exposing personal data.

## Solution
- Registrations via form/spreadsheet, each with a number and a coupon code.
- Deterministic algorithm (no `Math.random`): `hash = SHA-256(sorted list)`, `seed = SHA-256(timestamp + hash)`, `index = seed mod total`.
- The same function runs in Apps Script, in the browser and in a Node test.
- The live screen shows only first name and a masked code; phone numbers never enter the hash or the screen.
- A `conferir` (verify) function allows later auditing.

## Result
Auditable, reproducible raffle that protects participants' data.

## Stack
Google Apps Script, JavaScript, HTML, Google Sheets

## How to run
`node teste.js` to see a draw with fictitious data. For Apps Script, copy `src/` into a project bound to a spreadsheet with columns `numero,codigo,nome`.

## Author
Hadassa Lopes — [LinkedIn](https://www.linkedin.com/in/kesia-hadassa-vieira)
