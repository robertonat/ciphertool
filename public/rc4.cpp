#include <iostream>
#include <bitset>
#include <string>
#include <cctype>
#include <vector>
using namespace std;

// Initialize S array using user provided key
void initialization(int array[], string &key)
{
    for (int d = 0; d < 256; ++d)
    {
        array[d] = d;
    }
    int j = 0;
    int k = 0;
    for (int i = 0; i < 256; ++i )
    {
        k = (int)key[i%key.size()];
        j = ( j + array[i] + k ) % 256;
        int tmp = array[j];
		array[j] = array[i];
        array[i] = tmp;
    }
    return;
}

// Generate keystream to be XOR with plaintext
void generator(int array[], string &plaintext, vector<int>&keystream)
{
    int i = 0;
    int j = 0;
    for (size_t t = 0; t < plaintext.size(); ++t)
    {
		i = ( i+1 ) % 256;
		j = ( j + array[i] ) % 256;
		int tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
        keystream.push_back(array[ ( array[i] + array[j] ) % 256]);
    }
    return;
}

int main()
{
    string plaintext;
    cout << "Enter plaintext: ";
    getline(cin,plaintext);
    string key;
    cout << "Enter key: ";
    getline(cin,key);

    int sArray[256];
    initialization(sArray, key);
    vector<int> keystream;
    generator(sArray, plaintext, keystream);

	//cout << keystream.size() << " " << plaintext.size() << endl;
    // XOR
	string decryptedString = "";
	for (size_t k = 0 ; k < keystream.size() ; ++k)
	{
		bitset<8> x = bitset<8>(keystream[k]) ^ bitset<8>(plaintext[k]);
	//	cout << bitset<8>(keystream[k]) << endl;
	//	cout << bitset<8>(plaintext[k]) << endl;
	//	cout << x << endl;
		cout << std::hex << x.to_ulong() << " ";
    }
	cout << endl;
    return 0;
}
