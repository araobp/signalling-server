# Signalling Server

<img src="/doc/screenshot_pixel4.jpg" width=600>

This repo is a copy of https://github.com/Unity-Technologies/UnityRenderStreaming/tree/develop/WebApp with some minor modifications to optimize the web UI for my smartphones.

```
              +------------[Signalling server]----------+
              |                                         |
  [Unity on Windows10 PC]------- RTP media ------->[Smartphone]

```

## Motivation

I have been creating Digital Twin these days. I want to stream my works to smartphones on the net.

[Unity Furioos](https://unity.com/products/unity-furioos) is the solution for achieving that purpose, but I start learning how it works before using such a platform service.

## Modifications I have made for smartphones

- Four buttons: Y, A, X, B buttons
- One camera rather than two cameras: use a combination of Unity's Render Texture and RawImage to support multiple cameras on the Unity side

## Running the signalling server for Unity Render Streaming

I run the server on my RaspberryPi 3.

HTTP

```
$ cd WebApp
$ run ./run.sh
```

HTTPS

```
$ cd WebApp
$ run ./run_s.sh
```
## Element ID of the buttons

```
+--------+----+---------+
| button | ID | mapping |
+--------+----+---------+
| blue   | 1  | X       |
+--------+----+---------+
| green  | 2  | A       |
+--------+----+---------+
| orange | 3  | Y       |
+--------+----+---------+
| red    | 4  | B       |
+--------+----+---------+

```
