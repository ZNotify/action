# action-notify
Use https://github.com/ZNotify/Notify to send notification.

> Default site only available in mainland China

# Usage
```yaml
- name: Send Notification
  # You may pin to the exact commit or the version.
  # uses: ZNotify/action@2eed479761af2724414ef4a4e10d0e52331e4bd8
  uses: ZNotify/action@v0
  with:
    # The secret of the user will be notified.
    user_secret: 
    # Notification content.
    content: 
    # Notification title.
    title: # optional
    # Long notification content.
    long: # optional
    # Notification priority. [low, normal, high]
    priority: # optional, default is normal
    # Address of znotify push server.
    api_endpoint: # optional, default is https://push.learningman.top
```