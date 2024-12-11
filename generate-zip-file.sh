#!/bin/bash

# which dir the script is in
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR
rm altarede-custom-plugin.zip
zip -r altarede-custom-plugin.zip files manifest.json scripts
cd -
