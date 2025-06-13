#!/bin/bash
cd /home/kavia/workspace/code-generation/recipehub-32542-b51c3f41/recipehub_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

