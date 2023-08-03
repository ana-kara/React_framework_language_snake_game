from docx2json import convert

def convert_doc_to_json(file_path):
    json_data = convert(file_path)
    return json_data

# Usage example
file_path = "C:\\xampp\\htdocs\\react-games\\public\\products\\Japanese verbs N5 level.docx"
json_data = convert_doc_to_json(file_path)
with open('Japanese verbs N5 level.json', 'w') as json_file:
        json_file.write(json_data)
