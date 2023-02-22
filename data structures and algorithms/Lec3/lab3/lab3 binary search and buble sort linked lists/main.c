#include <stdio.h>
#include <stdlib.h>
#include "header.h"
#include "linked_list_version.h"
#define ARR_SIZE 6



int i = 0;

int main()
{
    int arr[ARR_SIZE] = {4, 3, 5, 6, 2, 1};

    /*

    SelectionSort(arr, 6);

    Display(arr, 6);

    */


    //the same but for linked lists using linked_list_version.

    //1) create double linked list from the above array
    linkedList L1;  //L.S. head and tail number 1.

    initHeadTail(&L1);    //to init the head and tail to null;

    for(i=0; i<ARR_SIZE; i++){
        append(arr[i], &L1);
    }


    printf("LINKED LIST BEFORE SORTING\n");
    display(&L1);

    //2)buble sort the linked list

    bubbleSort_linkedList(&L1, ARR_SIZE);

    printf("LINKED LIST AFTER SORTING\n");
    display(&L1);

    printf("\n********************\n");

    //3) search using binary search on the already sorted linked list
    int result = binarySearch_linkedList(5, &L1, ARR_SIZE);
    if(result >= 0){
        printf("the result is %d\n", result);

    }else{
        printf("the number is not in \n");

    }





    return 0;
}






