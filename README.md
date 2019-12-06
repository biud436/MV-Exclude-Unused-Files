
# Install
To install mv-resource-cleaner, you should run the install command using Node Package Manager, as follows.

```shell
 npm install -g mv-exclude-unused-files
```

# Usage
Starting mv-resource-cleaner is easy. Open the command line and then run as belows.

```shell
mv-resource-cleaner "src" "dst" [option]
```

For instance,

```shell
mv-resource-cleaner "E:/SteamLibrary/steamapps/common/RPG Maker MV/dlc/KadokawaPlugins_New/samples/Gacha Sample" "C:/Users/U/Desktop/Test"
```

# Option
There is the option is here. 

```
--audioFileFormat=ogg
--audioFileFormat=m4a
--remainTree=true
--remainTree=false
```

The option called ```--remainTree=false``` copies image and audio folders only so it is copied to fast.