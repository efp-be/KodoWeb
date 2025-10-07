# Web2Risk agency one page website solution example

## Quick start

- Create a directory *db*
- Create a file *db/password.txt*
- Just put a password in *db/password.txt*
- Run the following command:

```bash
docker compose up
```
- Go to http://localhost:9000
- Run the following command to shutdown properly containers
```bash
docker compose down
```

## Code sample

**Application files to consider regarding the application project are:**
- index.html
- mail.php
- scripts.js
- style.css

**Particular attention points:**
- A clear semanticaly exact and minimalist HTML structure, with just what's needed.
- As a good practice, JS script are embedded at the bottom of the document.
- Usage of [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to exchange some *application/json* with the PHP script.
- JS events handler are attached via [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) vanilla function when the [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) event is fired.
- Usage of [event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to cancel the native behavior of the submit button.
- The CSS sheet is implementing a [reset CSS](https://meyerweb.com/eric/tools/css/reset/) before to start.
- Usage of the [CSS Grid Layout API](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) to display some elements.
  
**To go further with this integration:**
- Improve the design quality
- Use [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) tag to manage image medias
- Use [PHPMailer](https://github.com/PHPMailer/PHPMailer) to send emails
- Minify JS / CSS files
- ...

## Links

- [Docker](https://www.docker.com/)
- [Use containers for PHP development](https://docs.docker.com/guides/php/develop/)