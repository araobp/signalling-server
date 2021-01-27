# Signalling server

<img src="/doc/screenshot_pixel4.jpg" width=600>

This repo is a copy of https://github.com/Unity-Technologies/UnityRenderStreaming/tree/develop/WebApp with some minor modifications to optimize the web UI for smartphones.

```
              +------------[Signalling server]----------+
              |                                         |
  [Unity on Windows10 PC]------- RTP media ------->[Smartphone]

```

## Motivation

I have been creating Digital Twin these days. I want to stream my works to smartphones on the net.

[Unity Furioos](https://unity.com/products/unity-furioos) is the solution for achieving that purpose, but I start learning how it works before using such a platform service.

## Modifications I have made for smartphones

- Add four buttons: A, B, X, Y buttons
- Add four arrow keys: down, right, left, up
- Support "touchstart" and "touchend" events to the buttons and keys
- One camera rather than two cameras: use a combination of Unity's Render Texture and RawImage to support multiple cameras on the Unity side
- Remove remote UI control: use HTML5 buttons only as remote UI input

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
## Element/event ID of the buttons and the keys

These elements are created by JavaScipt at a run time:

```
+---------+--------+------------+----------+
| button  | click  | touchstart | touchend |
| element |        |            |          |
+---------+--------+------------+----------+
| A       | 1      | 5          | 6        |
| B       | 2      | 7          | 8        |
| X       | 3      | 9          | 10       |
| Y       | 4      | 11         | 12       |
| Down    | 13     | 17         | 18       |
| Right   | 14     | 19         | 20       |
| Left    | 15     | 21         | 22       |
| Up      | 16     | 23         | 24       |
+---------+--------+------------+----------+
```
