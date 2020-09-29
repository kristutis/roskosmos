#!/bin/bash -e
if [[ $# != 1 ]]
then
	echo "Naudojimas: ./push.sh \"commit message\""
	echo "Pvz:"
	echo "./push.sh \"prideta nauja funkcija\""
	exit 1
fi

git add .
commit_message=$1
git commit -m "$commit_message"
git push

# cancellint commitus:
# git reset HEAD~1