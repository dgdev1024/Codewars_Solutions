// Our undo/redo implementation.
function undoRedo (object) {
    // Store our last actions and our undone actions.
    let lastActions = [];
    let undoneActions = [];

    // Return our undo/redo functions.
    return {
        // Sets or edits a key in our object to the given value.
        set (key, value) {
            // Check to see if the key is already present.
            if (object.hasOwnProperty(key) === true) {
                // This is an edit operation. Put the key name and the
                // last value this key had in the last actions array.
                lastActions.push([ 'edit', key, object[key], value ]);
            } else {
                // This is a set operation. Put the new key name and value in.
                lastActions.push([ 'set', key, value ]);
            }

            // Now set the value.
            object[key] = value;

            // This is a new action. If there were any undone operations in our queue,
            // then destroy them.
            undoneActions = [];
        },

        // Retrieves a property from our object.
        get (key) {
            return object[key];
        },

        // Removes a property from our object.
        del (key) {
            // If the property is present in our array, then delete it.
            if (object[key]) {
                // Register the action in our undo array.
                lastActions.push([ 'del', key, object[key] ]);

                // Remove the property.
                delete object[key];

                // This is a new action. Clear our undo array.
                undoneActions = [];
            }
        },

        // Reverts the object to the next most recent state.
        undo () {
            // Throw an exception if there's nothing in the last actions queue.
            if (lastActions.length === 0) {
                throw new Error('No actions in last actions queue.');
            }

            // Grab the last action and pop it from the last actions array.
            const popped = lastActions.pop();
            
            // Determine the operation that was performed and undo it.
            if (popped[0] === 'set')        { delete object[popped[1]]; }
            else if (popped[0] === 'edit')  { object[popped[1]] = popped[2]; }
            else if (popped[0] === 'del')   { object[popped[1]] = popped[2]; }

            // Add the action to the list of undone actions.
            undoneActions.push(popped);
        },

        // Reverts the most recent action that was undone.
        redo () {
            // Throw if there's nothing in the undone actions queue.
            if (undoneActions.length === 0) {
                throw new Error('No actions in the undone actions queue.');
            }

            // Grab the last undone action.
            const popped = undoneActions.pop();

            // Determine the operation undone and redo it.
            if (popped[0] === 'set')        { object[popped[1]] = popped[2]; }
            else if (popped[0] === 'edit')  { object[popped[1]] = popped[3]; }
            else if (popped[0] === 'del')   { delete object[popped[1]]; }

            // Add the action to the list of previous actions.
            lastActions.push(popped);
        }
    }
}