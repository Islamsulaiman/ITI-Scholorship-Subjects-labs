#ifndef LINKED_LIST_VERSION_H_INCLUDED
#define LINKED_LIST_VERSION_H_INCLUDED


typedef struct node node;

struct node
{
    int data;
    node *prev, *next;
};

typedef struct linkedList
{
    node *head, *tail;

}linkedList;

void initHeadTail(linkedList * ls) {
    ls->head = ls ->tail = NULL; //initialize head and tail for new LS to null
}

node * createNode(int data){  //create new node at the heap
    //create new node
    node * newNode = (node *) malloc(sizeof(node));
    newNode->data = data;
    newNode->next = newNode->prev = NULL;

    return newNode;
}


void append(int data, linkedList * ls){    //append to the end

    //create new node
    node * newNode = createNode(data);


    //if the first node
    if(ls->head == NULL){   //no other nodes there. ls->head because ls is a struct that contains head an tail and this is how to access it

        ls->head = ls->tail = newNode; //make head point to the first node

    }else{  //if last node

        ls->tail->next = newNode;
        newNode ->prev = ls->tail;
        ls->tail = newNode;

    }
}

void display(linkedList * ls){

    //create temp node to move with the loop
    node * temp = ls->head; //to start with the head of th LS


    // no nodes yet
    if(ls->head == NULL){

        printf("Please insert nodes first\n");
        return;

    }else{  //loop over nodes until the last one

        while(temp != NULL){  //while there is another node next


            printf("%d ", temp->data); //display the next node data
            temp = temp ->next;


        }
    }
}


node * getNodeByIndex(linkedList * ls, int index) {

    int counter = 0;
    node *temp = (node *) malloc (sizeof(node));

    if(temp == NULL){   //if there's no space at the memory.
        printf("no space at the memory");
        return;
    }
    temp = ls->head;    //after malloc give space, assign temp to head.

    //if no node inside
    if(ls->head == NULL){

        printf("add nods first\n");
        return temp;
    }

    //if there's node
    while(temp != NULL){
        if(counter == index){

            //printf("%d\n", temp->data);
            return temp;        //return the address of the current node
        }

        temp = temp->next;
        counter ++;
    }
    free(temp);     //to free its space after done with it
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


void swap_linkedList(node *first, node *second)
{
    int temp = first->data;
    first->data = second->data;
    second->data = temp;
}



void bubbleSort_linkedList(linkedList *data, int size)
{
    int counter, index;
    int sorted = 0;

    for(counter = 0; counter < size - 1 && !sorted; counter++)
    {
        sorted = 1;

        for(index = 0; index < size - 1 - counter; index++)
        {
            node * current_node_data = getNodeByIndex(data,index);


            node * next_node_data = getNodeByIndex(data,index+1);

            if(current_node_data->data  >  next_node_data->data) //using getNodeByIndex get the data of the current node and the next node in LS
            {
                swap_linkedList(current_node_data, next_node_data);
                sorted = 0;
            }
        }
    }
}


int binarySearch_linkedList(int item, linkedList *data, int size)
{
    int minIndex = 0, maxIndex = size - 1, midIndex;

    while(minIndex <= maxIndex)
    {
        midIndex = (minIndex + maxIndex) / 2;

        int midIndex_data = getNodeByIndex(data,midIndex)->data;

        if(item == midIndex_data){
            return midIndex_data;
        }

        if(item > midIndex_data){
            minIndex = midIndex + 1;
        }else{
            maxIndex = midIndex - 1;
        }
    }

    return -1;
}








#endif // LINKED_LIST_VERSION_H_INCLUDED
