from dataclasses import replace
#from jmespath import search


directory = "D:\\VSCodeWorkspace\\Learning\\Well\\TextReplace\\Text\\"
originalFile = directory + "ori.txt"
resultFile = directory + "res.txt"

#replacelist = directory + "list.txt"

searchList = ["、", "。", "「", "」", "？", "！", "――", "―", "…………",
              "……", "…", "◇", "◆", "】", "【", "『", "』", "・", "‥"]

replaceList = [",", ".", "\"", "\"", "?", "!", "-", "-",
               "...", "...", "...", "*", "*", "[", "]", "[", "]", "", ".."]

originalTextFile = open(originalFile, "r", encoding="utf8")
originalContent = originalTextFile.read()
originalTextFile.close

if len(searchList) != len(replaceList):
    print("Error, two arrays are not equal, exiting...")
    quit()

for i in range(0, len(searchList)):
    resultContent = originalContent.replace(searchList[i], replaceList[i])

resultTextFile = open(resultFile, "w", encoding="utf8")
resultTextFile.write(resultContent)
resultTextFile.close


print(originalContent)
print(resultContent)
print("Operation complete.")
