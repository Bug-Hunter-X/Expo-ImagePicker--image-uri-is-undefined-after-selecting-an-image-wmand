# Expo ImagePicker URI Undefined Bug

This repository demonstrates a bug in the Expo ImagePicker library where the `image.uri` property is sometimes undefined after selecting an image from the device's gallery.  The bug is intermittent and doesn't occur consistently. The solution provided addresses this issue by implementing error handling and alternative retrieval mechanisms.

## Steps to Reproduce

1. Clone the repository.
2. Run the `bug.js` example. This will reproduce the error.  It may require several attempts before the issue manifests.
3. Run the `bugSolution.js` example to see how to mitigate the bug.

## Bug Report

See the `bug.js` file for a code example that reproduces the error.  The error is related to the asynchronous nature of the ImagePicker and potentially race conditions in handling the picked image object.