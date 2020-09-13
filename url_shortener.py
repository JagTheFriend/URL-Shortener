# import nesessary library
import pyshorteners as pyshort


link = input("Enter the link: ") # getting the link

def shorternerfunction(link):
	shortener = pyshort.Shortener() # shortening the URL

	new_link = shortener.tinyurl.short(link) # making a shorter version of the url

	return new_link # giving out the url

print(shorternerfunction(link))
