// Our automaton class.
function Automaton()
{
    this.states = [ 'q1', 'q2', 'q3' ];         // Our array of possible states.
    this.currentState = this.states[0];         // Our current state.
    this.acceptState = this.states[1];          // Our accept state.
}

// This function will read an array of commands ranging from 0 to 1,
// in order to modify our current state. Returns true if the resulting
// current state matches our accept state.
Automaton.prototype.readCommands = function (commands)
{
    // Check to see if our commands array argument is an array.
    if (Array.isArray(commands) === false) { return false; }

    // Reset our current state.
    this.currentState = this.states[0];

    // Iterate through our commands.
    commands.forEach(command => {
        // Since our command could be any type of symbol, we want to normaize it
        // to a single character.
        var commandAsString = command.toString().charAt(0);

        // Modify our current state based on the command received, and our current
        // state as it stands now.
        switch (this.currentState) {
            case this.states[0]:
                this.currentState = (commandAsString === '1') ? this.states[1] : this.states[0];
                break;
            case this.states[1]:
                this.currentState = (commandAsString === '0') ? this.states[2] : this.states[1];
                break;
            case this.states[2]:
                this.currentState = this.states[1];
                break;
        }
    });

    // Return true if our current state matches our accept state.
    return this.currentState === this.acceptState;
}

module.exports = Automaton;