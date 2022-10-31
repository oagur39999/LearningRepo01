from dataclasses import replace
from unittest import result
import pyperclip
from tkinter import *
from tkinter import ttk
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
    keyboard.on_release_key('c', lambda e: replaceText())

def bgScript():
    keyboard.on_press_key('ctrl', lambda e: copyListen())


root = Tk()
ckbBG = IntVar()
root.title("Text Replacer")
root.geometry("150x100")
a = ttk.Button(root, text="Replace!", command=replaceText)
b = ttk.Checkbutton(root, text="BG script",
                    variable=ckbBG, onvalue=1, offvalue=0, command=bgScript)
a.place(relx=0.5, rely=0.3, anchor=CENTER)
b.place(relx=0.5, rely=0.7, anchor=CENTER)
#root.attributes('-topmost', True)
root.resizable(0, 0)
root.mainloop()
# a.pack()
# b.pack()


