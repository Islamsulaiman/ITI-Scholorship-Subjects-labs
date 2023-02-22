#include <stdio.h>
#include <stdlib.h>
#include "LinkedList.h"

int main()
{
    /*LinkedList myList = {.head = NULL, .tail = NULL};
    Add(&myList, 3);*/

    linkedList L1;  //L.S. head and tail number 1.

    initHeadTail(&L1);    //to init the head and tail to null;

    getNodeByIndex(&L1,1);

    append(5, &L1);
    append(6, &L1);
    append(7, &L1);
    append(8, &L1);

    display(&L1);
    printf("\n\n");
    removeNode(&L1, 3);

    display(&L1);



    return 0;
}
