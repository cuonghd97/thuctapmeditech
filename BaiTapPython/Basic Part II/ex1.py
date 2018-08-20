def kt(args):
    if len(args) == len(set(args)):
        return True
    else:
        return False
print(kt([1,2,3,4]))
print(kt([1,1,2]))