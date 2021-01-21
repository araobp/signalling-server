# Signalling Server

This repo is a copy of https://github.com/Unity-Technologies/UnityRenderStreaming/tree/develop/WebApp with some minor modifications to optimize the web UI for my smartphones.

```
              +------------[Signalling server]----------+
              |                                         |
  [Unity on Windows10 PC]------- RTP media ------->[Smartphone]

```

## Motivation

I have been creating Digital Twin these days. I want to stream my works to smartphones on the net.

[Unity Furioos](https://unity.com/products/unity-furioos) is the solution for achieving that purpose, but I start learning how it works before using such a platform service.

## Running the signalling server for Unity Render Streaming

I run the server on my RaspberryPi 3.

```
$ cd WebApp
$ run ./run.sh
```

 
