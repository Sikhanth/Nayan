from app.notification.notifier import Notifier

notifier = Notifier()

notifier.alert(
    "Test Alert",
    "This is a notification test."
)