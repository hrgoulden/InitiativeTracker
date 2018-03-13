# InitiativeTracker

Hosted online at: https://hrgoulden.github.io/InitiativeTracker/

The intention for this project was to construct a tool for use with Dungeons & Dragons, 5th edition. With this initiative tracker, a Dungeon Master (or DM) should have an easier time keeping track of multiple characters participating during combat.

Characters can be added to the tracker using the "hover to add character" bar at the bottom of the page. After hovering the mouse over this tab, options for adding a character will appear: Name, AC (Armor Class), HP (Hit Points), and Initiative. Feel free to leave a few of these blank (you might prefer to let your players keep track of their AC and HP), but ensure that a value is entered for Initiative and at least one other field. The value for Initiative must be a number, but the other fields have no such limitations.

When you have filled out the fields as you choose, **press enter to add the new character**. Your cursor will be redirected back to the "name" field of the character adding tab, enabling you to efficiently add multiple characters in a row.

Each Character Block created for each new character should be added in descending initiative order. If two characters both have the same initiative score, the characters will be placed in the order they were added. In case of an error, you are free to change Initiative scores retroactively, and the character's placement in the list will be changed to reflect the new order. 

Note that three new fields are also added: Current HP, Damage Taken, and Notes. 
Current HP starts out equal to Max HP.
The Damage Taken field allows you to **input a number and then press enter** to reduce Current HP by that amount. When a character's Current HP is less than half of their Max HP, or zero or below, the color of their character block will change accordingly.
The Notes field can be expanded or contracted as you desire, and you are free to place whatever information you want there (statuses such as poisoned or paralyzed, attack bonus and damage dice, battlefield positioning details... etc.). 

When combat has begun, you can begin **cycling through characters using your arrow keys**. The currently active character will be highlighted by a yellow border. When you reach the end of the list of characters, pressing down again will return you to the top of the initiative list.

Note that all fields of each Character Block can be changed retroactively. If a character's name needs to be changed to reflect some sort of story reveal, if a character dons armor and increases their AC, or if you need to prolong a monster's lifespan for the sake of game balance... go right ahead!

---

TODO

- [x] Implement Turn Tracker to specify which character should be acting
- [x] Change characterBlock background color to emphasize low or zero hp
- [x] Add "Haste" and "Slow" explanation windows
- [x] Add gh-pages branch and add link to readme
