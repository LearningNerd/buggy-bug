// Call an undefined function and send the error to Sentry!
try {
  gottaCatchEmAll();
} catch (err) {
  Sentry.captureException(err);
}
