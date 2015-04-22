# Curb Your Alerts

This extension for Safari will prevent JavaScript dialog boxes from popping up.

## Why

JavaScript dialog boxes are not usually used by modern websites. However, JavaScript dialog boxes are used by malicious websites and web developers who don't know about `console.log` nor `debugger`.

## Install

Download the [Curb Your Alerts][1] Safari extension and open the file to install.

Of course, you can always clone this repository and [build the extension][2] from source too.

## Todo

* show messages in the page instead throwing errors
* add setting to throw errors instead of in-page messages (for developers)
* add setting to allow an dialog X number of times per page

## Change Log

*April 22, 2015*

* Initial version
* Throw errors instead of alerting, confirming, or prompting.

  [1]: https://keithws.net/curb-your-alerts/curb-your-alerts.safariextz
  [2]: https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/UsingExtensionBuilder/UsingExtensionBuilder.html#//apple_ref/doc/uid/TP40009977-CH2-SW1
