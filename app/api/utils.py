def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            label = field.split("_")
            for i in range(len(label)):
                label[i] = label[i].capitalize()
            label = " ".join(label)

            if isinstance(error, list):
                for err in error:
                    errorMessages.append(f'{label} : {err}')
            else:
                errorMessages.append(f'{label} : {error}')
    return errorMessages