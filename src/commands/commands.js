/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
/* global global, Office, self, window */

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {
    const message = {
        type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
        message: "Performed action.",
        icon: "Icon.80x80",
        persistent: true
    };

    // Show a notification message
    Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);

    // Be sure to indicate when the add-in command function is complete
    event.completed();
}

function getGlobal() {
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window != "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    return undefined;
}

const g = getGlobal();

// the add-in command functions need to be available in global scope
g.action = action;
