# Casino Craps

This is a 100% in browser implementation of the popular casino game, Craps.

I used this as a project to be my introduction to programming for the web in 2013. Active development ended around October/November 2013. This project is in serious need of some TLC to clean up/polish the code and bring it up to modern standards.

This is built using vanilla JavaScript, JQuery, the HTML5 Canvas, as well as some CSS3 animations/transitions.

forked from https://github.com/mduleone/craps

# GoDice

Used git technique described at https://git-scm.com/book/en/v2/Git-Tools-Submodules 

Added submodule from https://github.com/ParticulaCode/GoDiceJavaScriptAPI

I shouldn't have used submodules - will try to figure out later but here are the changes I made to main.js

GoDice.prototype.onDiceConnected = (diceId, diceInstance) => {
+    $('#checkboxUsingGoDice').prop('checked',true);^M
+    GameState.UsingGoDice = true;^M
     console.log("Dice connected: ", diceId);

@@ -175,6 +177,8 @@ GoDice.prototype.onStable = (diceId, value, xyzArray) => {
// Get roll value indicator and show stable value
const diceIndicatorEl = document.getElementById(diceId + "-die-status");
diceIndicatorEl.textContent = "Stable: " + value;
+       console.log("Die1: [" + $('#GoDie1').val() + "]; Die2: [" + $('#GoDie2').val() + "];")^M
+       setCraps( value );^M

GoDice.prototype.onTiltStable = (diceId, xyzArray, value) => {
@@ -191,6 +195,7 @@ GoDice.prototype.onFakeStable = (diceId, value, xyzArray) => {
// Get tile indicator and show fake value
const diceIndicatorEl = document.getElementById(diceId + "-die-status");
diceIndicatorEl.textContent = "Fake Stable: " + value;
+       setCraps( value );^M




# License
MIT
