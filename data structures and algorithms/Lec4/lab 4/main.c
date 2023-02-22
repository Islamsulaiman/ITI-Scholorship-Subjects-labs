#include <stdio.h>
#include <stdlib.h>

#include "Tree.h"

int main()
{
    Tree tree = {.Root = NULL};

    Add(&tree, 50);
    Add(&tree, 40);
    Add(&tree, 30);
    Add(&tree, 65);
    Add(&tree, 70);
    Add(&tree, 60);
    Add(&tree, 35);

    //to try

    //Add(&tree, 36);
    //Add(&tree, 35);






    // Assg. , create a function to get the height of a tree.
    Node * base = tree.Root;    // this is the root node of the tree using the head struct

    int Height = height(base);

    printf("The tree height is %d\n", Height);

    return 0;
}
