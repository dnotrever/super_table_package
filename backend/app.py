from flask import Flask, jsonify, request
from flask_cors import CORS
from time import sleep

app = Flask(__name__)
CORS(app)

users_database = [
    {
        'id': i + 1,
        'coluna1': f'Columns A {i + 1}',
        'coluna2': f'Columns B {i + 1}',
        'coluna3': f'Columns C {i + 1}',
        'coluna4': f'Columns D {i + 1}',
        'coluna5': f'Columns E {i + 1}',
        'coluna6': f'Columns F {i + 1}',
        'coluna7': f'Columns G {i + 1}',
        'coluna8': f'Columns H {i + 1}',
        'coluna9': f'Columns I {i + 1}',
        'coluna10': f'Columns J {i + 1}',
    }
    for i in range(10000)
]

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Sucesso! API Flask está funcionando.'}), 200

@app.route('/api/users', methods=['GET'])
def get_users():

    try:

        page = int(request.args.get('page', 1))
        page_size = int(request.args.get('pageSize', 20))
        
        sort_column = request.args.get('sortColumn')
        sort_direction = request.args.get('sortDirection', 'asc')

        if page < 1:
            page = 1
        if page_size < 1:
            page_size = 20
        
        sorted_users = users_database.copy()
        
        if sort_column and sort_column in ['id', 'coluna1', 'coluna2', 'coluna3', 'coluna4', 'coluna5', 'coluna6', 'coluna7', 'coluna8', 'coluna9', 'coluna10']:
            reverse = sort_direction.lower() == 'desc'
            sorted_users.sort(key=lambda x: x.get(sort_column, ''), reverse=reverse)

        start_index = (page - 1) * page_size
        end_index = start_index + page_size

        paginated_users = sorted_users[start_index:end_index]

        sleep(1)

        return jsonify({
            'data': paginated_users,
            'total': len(users_database),
            'page': page,
            'pageSize': page_size,
            'totalPages': (len(users_database) + page_size - 1) // page_size
        }), 200
        
    except ValueError as err:
        return jsonify({'error': 'Parâmetros inválidos'}), 400
    
    except Exception as err:
        return jsonify({'error': str(err)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
