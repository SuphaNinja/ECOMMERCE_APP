#!/bin/bash

# Run prisma generate
npx prisma generate

# Run your build command
npm run build  # or yarn build, depending on your setup

# Start your application
npm start  # or yarn start, depending on your setup