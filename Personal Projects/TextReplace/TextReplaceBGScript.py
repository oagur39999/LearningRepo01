from dataclasses import replace
from unittest import result
import pyperclip
from tkinter import *
from tkinter import ttk
from pynput import keyboard as pykb
import keyboard


def replaceText():

    originalText = pyperclip.paste()

    searchList = ["、", "。", "「", "」", "？", "！", "――", "―", "…………",
                  "……", "…", "◇", "◆", "【", "】", "『", "』", "・", "‥"]


    replaceList = [",", ".", "\"", "\"", "?", "!", "-", "-",
                   "...", "...", "...", "*", "*", "[", "]", "[", "]", "", ".."]

    if len(searchList) != len(replaceList):
        print("Error, two arrays are not equal, exiting...")
        quit()

    for i in range(0, len(searchList)):
        originalText = originalText.replace(searchList[i], replaceList[i])

    resultText = originalText
    pyperclip.copy(resultText)


def copyListen():
    print('ctrl pressed')
    keyboard.on_release_key('c', lambda e: replaceText())

keyboard.on_press_key('ctrl', lambda e: copyListen())

keyboard.wait()
