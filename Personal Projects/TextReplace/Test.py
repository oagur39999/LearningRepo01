import csv
from tkinter import *
from tkinter import filedialog
import pyperclip

string1=[]
string2=[]

def choose_csv_file():
    root = Tk()
    root.filename = filedialog.askopenfilename(
        initialdir="/", title="Select file", filetypes=(("csv files", "*.csv"), ("all files", "*.*")))
    print(root.filename)
    root.withdraw()


def read_csv(filename):
    with open(filename, 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            string1 = row[0]
            string2 = row[1]
            print(string1)
            print(string2)


def read_from_clipboard():
    clipboard = pyperclip.paste()
    return clipboard


def write_to_clipboard(text):
    pyperclip.copy(text)


def main():
    clipboard = read_from_clipboard()
    for i in range(len(string1)):
        clipboard = clipboard.replace(string1[i], string2[i])
    write_to_clipboard(clipboard)

