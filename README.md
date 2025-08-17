# Position Book UI

A position book is a record of all positions held by a trader/portfolio. In this UI, users are able to create trade events and view a summary table of the position book. 

## Overview
### Position Summary Tab
In the Position Summary tab, users are able to view a summary table of the position book, i.e. the account, the security name, total trade quantity per account per security, as well as each event that was created in relation to this account and security.

### Create Event Tab
In the Create Event tab, users are able to define the parameters of each event accordingly. Users are also able send multiple trade events by using the 'Add Trade Event' button before submitting. 

## Backend system

The backend of this UI is served through the [position-book-service](https://github.com/yiweichay/position-book-service) repo. Steps to get started with the backend 

## Tech and Getting Started

This project is a React typescript based Web UI.

To get started, make sure you have npm and node installed. In the project directory, you can run:

```
npm install
npm run start
```

### Tests

To run the unit tests in this project, run:

`npm run test api.test.ts`

