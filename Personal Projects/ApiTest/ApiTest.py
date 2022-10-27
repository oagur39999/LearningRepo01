import requests

#Syosetu API
#https://dev.syosetu.com/man/api/

apiRoot = "https://api.syosetu.com/novelapi/api/"
apiBigGenre = "?biggenre=1"
apiGenre = "?genre=101"
apiOf="t-n-w-s-g-k-nt-wp"

# ?biggenre= → 1:Romance, 2:Fantasy, 3:Lit, 4:SciFi, 99:Other, 98:Non-genre.
# ?biggenre=1-3 >romance or lit
# ?genre=102 
# 101: Different World, 102: Real World
# 201: High Fantasy, 202: Low Fantasy
# 301: Pure literature, 302: Human drama, 303: History, 304: Inference, 305: Horror, 306: Action, 307: Comedy
# 401: VR game, 402: Space , 403: Fancy science, 404: Panic
# 9901: Fairy tale,  9902: Poetry,  9903: Essay ,  9904: Replay, 9999: Other
# 9801: Non-genre
# exclude: notbiggenre, notgenre
response = requests.get(apiRoot+apiOf+apiBigGenre)

print(response.status_code)

#apiResponseFile = "D:\\VSCodeWorkspace\\Learning\\Well\\ApiTest\\apiResponse.txt"
#openResponseFile = open(apiResponseFile)
#openResponseFile.write(response.content)
#openResponseFile.close()