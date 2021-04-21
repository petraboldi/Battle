# Battle

## Project Setup

## Problem Approach

### Functional Representation Domain Model

| Objects   | Properties    | Messages           | Context                               | Output                                            |
| --------- | ------------- | ------------------ | ------------------------------------- | ------------------------------------------------- | ----------------------------------- |
| Player    | name          | getName()          | see player's names before game starts | name@str                                          |
| Player    | hitPoints     | getHitPoints       |                                       | hitPoints@int                                     |
| --------- | ------------- | ---------          | ---------                             | ---------                                         |
| Battle    |               | addPlayer(players) |                                       |                                                   | ''Player has joined the battle'@str |
| Battle    |               | startBattle()      |                                       | 'Battle started between player1 and player 2'@str |
| --------- | ------------- | ---------          | ---------                             | ---------                                         |
