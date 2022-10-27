from dataclasses import replace
from unittest import result
import pyperclip
from tkinter import *
from tkinter import ttk


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


root = Tk()
root.title("Text Replacer")
root.geometry("200x50")
a = ttk.Button(root, text="Replace!", command=replaceText)
a.place(relx=0.5, rely=0.5, anchor=CENTER)
a.focus()
root.bind("Return", replaceText)
root.attributes('-topmost', True)
root.resizable(0,0)
root.mainloop()
