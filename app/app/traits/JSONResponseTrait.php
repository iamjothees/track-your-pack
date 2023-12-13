<?php
    namespace App\Traits;

    use Illuminate\Http\JsonResponse;
    use stdClass;

    trait JSONResponseTrait{
        protected function success(mixed $data, string $message = "Success", int $statusCode = 200) : JsonResponse{
            $response = [
                'status' => 'success',
                'data' => $data,
                'message' => $message,
            ];

            return response()->json($response, $statusCode);
        }
        
        protected function failed(string|stdClass $message = "Oops! Something went wrong.",int $statusCode = 500, mixed $data = null) : JsonResponse{
            $response = [
                'status' => 'failed',
                $data,
                'message' => $message,
            ];

            return response()->json($response, $statusCode);
        }
        
    }