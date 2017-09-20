# The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.

Example Input: 3
Example Output: 3

#The program adds "ay" to single-letter words beginning with a vowel.

Example Input: i
Example Output: iway

#The program adds "ay" to multiple-letter words beginning with a vowel.

Example Input: away
Example Output: awayay

#For words beginning with one consonant, the program moves the consonant to the end, and adds "ay".

Example Input: balloon
Example Output: alloonbay

#For words beginning with multiple consonants, the program moves the consonants to the end, and adds "ay".

Example Input: christmas
Example Output: istmaschray

#For words beginning with a "y", the program treats "y" as a consonant.

Example Input: year
Example Output: ear-yay

#For words containing "qu", the program moves the "u" along with the "q".

Example Input: quagmire
Example Output: agmirequay
