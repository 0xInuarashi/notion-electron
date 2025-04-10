This repository is made for people who want to use Notion as a standalone app on linux without any other additional bullshit. 
All it is, is really just wrapping https://notion.so inside an electron wrapper.
The code is 15 lines. That's all there is to it.

Clone the repo
```git clone https://github.com/0xInuarashi/notion-electron/```

Install the dependencies
```npm install```

Build it yourself 
```npm run build```

Installation: Go to /dist
```sudo dpkg -i <built_package_name>.deb```

Find it in your flavour of desktop environment:
![image](https://github.com/user-attachments/assets/51c2fc03-9678-4bce-8dec-341bd5c35f3a)

It's just configured to build to .deb as of this commit.

Cheers, Inu
